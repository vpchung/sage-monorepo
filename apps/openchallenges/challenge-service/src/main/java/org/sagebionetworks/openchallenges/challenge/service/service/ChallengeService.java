package org.sagebionetworks.openchallenges.challenge.service.service;

import java.util.Arrays;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.sagebionetworks.openchallenges.challenge.service.ChallengeServiceApplication;
import org.sagebionetworks.openchallenges.challenge.service.exception.ChallengeNotFoundException;
import org.sagebionetworks.openchallenges.challenge.service.model.dto.ChallengeDto;
import org.sagebionetworks.openchallenges.challenge.service.model.dto.ChallengeJsonLdDto;
import org.sagebionetworks.openchallenges.challenge.service.model.dto.ChallengeSearchQueryDto;
import org.sagebionetworks.openchallenges.challenge.service.model.dto.ChallengesPageDto;
import org.sagebionetworks.openchallenges.challenge.service.model.entity.ChallengeEntity;
import org.sagebionetworks.openchallenges.challenge.service.model.mapper.ChallengeJsonLdMapper;
import org.sagebionetworks.openchallenges.challenge.service.model.mapper.ChallengeMapper;
import org.sagebionetworks.openchallenges.challenge.service.model.repository.ChallengeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ChallengeService {

  private static final Logger logger = LoggerFactory.getLogger(ChallengeService.class);

  private final ChallengeRepository challengeRepository;

  public ChallengeService(ChallengeRepository challengeRepository) {
    this.challengeRepository = challengeRepository;
  }

  // @Autowired private ProducerService producerService;

  private ChallengeMapper challengeMapper = new ChallengeMapper();
  private ChallengeJsonLdMapper challengeJsonLdMapper = new ChallengeJsonLdMapper();

  private static final List<String> SEARCHABLE_FIELDS = Arrays.asList(
    "description",
    "headline",
    "input_data_types.class_id",
    "input_data_types.preferred_label",
    "name",
    "operation.class_id",
    "operation.preferred_label"
  );

  @Transactional(readOnly = true)
  public ChallengesPageDto listChallenges(ChallengeSearchQueryDto query) {
    logger.debug("query {}", query);

    Pageable pageable = PageRequest.of(query.getPageNumber(), query.getPageSize());

    // ChallengeDomain challengeDomain = new ChallengeDomain("plop");
    // log.info("challenge sent: {}", challengeDomain);
    // producerService.sendMessage(challengeDomain);

    List<String> fieldsToSearchBy = SEARCHABLE_FIELDS;
    Page<ChallengeEntity> challengeEntitiesPage = challengeRepository.findAll(
      pageable,
      query,
      fieldsToSearchBy.toArray(new String[0])
    );
    logger.debug("challengeEntitiesPage {}", challengeEntitiesPage);

    List<ChallengeDto> challenges = challengeMapper.convertToDtoList(
      challengeEntitiesPage.getContent()
    );

    return ChallengesPageDto.builder()
      .challenges(challenges)
      .number(challengeEntitiesPage.getNumber())
      .size(challengeEntitiesPage.getSize())
      .totalElements(challengeEntitiesPage.getTotalElements())
      .totalPages(challengeEntitiesPage.getTotalPages())
      .hasNext(challengeEntitiesPage.hasNext())
      .hasPrevious(challengeEntitiesPage.hasPrevious())
      .build();
  }

  @Transactional(readOnly = true)
  public ChallengeDto getChallenge(Long challengeId) {
    ChallengeEntity challengeEntity = getChallengeEntity(challengeId);
    return challengeMapper.convertToDto(challengeEntity);
  }

  @Transactional(readOnly = true)
  public ChallengeJsonLdDto getChallengeJsonLd(Long challengeId) {
    ChallengeEntity challengeEntity = getChallengeEntity(challengeId);
    return challengeJsonLdMapper.convertToDto(challengeEntity);
  }

  private ChallengeEntity getChallengeEntity(Long challengeId) throws ChallengeNotFoundException {
    return challengeRepository
      .findById(challengeId)
      .orElseThrow(() ->
        new ChallengeNotFoundException(
          String.format("The challenge with ID %d does not exist.", challengeId)
        )
      );
  }
}
