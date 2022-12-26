package org.sagebionetworks.challenge.model.repository;

import org.sagebionetworks.challenge.model.entity.ChallengeEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ChallengeRepositoryCustom {

  Page<ChallengeEntity> findAll(Pageable pageable, ChallengeFilter filter);
}