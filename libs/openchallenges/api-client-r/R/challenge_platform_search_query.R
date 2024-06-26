#' Create a new ChallengePlatformSearchQuery
#'
#' @description
#' A challenge platform search query.
#'
#' @docType class
#' @title ChallengePlatformSearchQuery
#' @description ChallengePlatformSearchQuery Class
#' @format An \code{R6Class} generator object
#' @field pageNumber The page number. integer [optional]
#' @field pageSize The number of items in a single page. integer [optional]
#' @field sort  \link{ChallengePlatformSort} [optional]
#' @field direction  \link{ChallengePlatformDirection} [optional]
#' @field searchTerms A string of search terms used to filter the results. character [optional]
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
ChallengePlatformSearchQuery <- R6::R6Class(
  "ChallengePlatformSearchQuery",
  public = list(
    `pageNumber` = NULL,
    `pageSize` = NULL,
    `sort` = NULL,
    `direction` = NULL,
    `searchTerms` = NULL,
    #' Initialize a new ChallengePlatformSearchQuery class.
    #'
    #' @description
    #' Initialize a new ChallengePlatformSearchQuery class.
    #'
    #' @param pageNumber The page number.. Default to 0.
    #' @param pageSize The number of items in a single page.. Default to 100.
    #' @param sort sort
    #' @param direction direction
    #' @param searchTerms A string of search terms used to filter the results.
    #' @param ... Other optional arguments.
    #' @export
    initialize = function(`pageNumber` = 0, `pageSize` = 100, `sort` = NULL, `direction` = NULL, `searchTerms` = NULL, ...) {
      if (!is.null(`pageNumber`)) {
        if (!(is.numeric(`pageNumber`) && length(`pageNumber`) == 1)) {
          stop(paste("Error! Invalid data for `pageNumber`. Must be an integer:", `pageNumber`))
        }
        self$`pageNumber` <- `pageNumber`
      }
      if (!is.null(`pageSize`)) {
        if (!(is.numeric(`pageSize`) && length(`pageSize`) == 1)) {
          stop(paste("Error! Invalid data for `pageSize`. Must be an integer:", `pageSize`))
        }
        self$`pageSize` <- `pageSize`
      }
      if (!is.null(`sort`)) {
        if (!(`sort` %in% c())) {
          stop(paste("Error! \"", `sort`, "\" cannot be assigned to `sort`. Must be .", sep = ""))
        }
        stopifnot(R6::is.R6(`sort`))
        self$`sort` <- `sort`
      }
      if (!is.null(`direction`)) {
        if (!(`direction` %in% c())) {
          stop(paste("Error! \"", `direction`, "\" cannot be assigned to `direction`. Must be .", sep = ""))
        }
        stopifnot(R6::is.R6(`direction`))
        self$`direction` <- `direction`
      }
      if (!is.null(`searchTerms`)) {
        if (!(is.character(`searchTerms`) && length(`searchTerms`) == 1)) {
          stop(paste("Error! Invalid data for `searchTerms`. Must be a string:", `searchTerms`))
        }
        self$`searchTerms` <- `searchTerms`
      }
    },
    #' To JSON string
    #'
    #' @description
    #' To JSON String
    #'
    #' @return ChallengePlatformSearchQuery in JSON format
    #' @export
    toJSON = function() {
      ChallengePlatformSearchQueryObject <- list()
      if (!is.null(self$`pageNumber`)) {
        ChallengePlatformSearchQueryObject[["pageNumber"]] <-
          self$`pageNumber`
      }
      if (!is.null(self$`pageSize`)) {
        ChallengePlatformSearchQueryObject[["pageSize"]] <-
          self$`pageSize`
      }
      if (!is.null(self$`sort`)) {
        ChallengePlatformSearchQueryObject[["sort"]] <-
          self$`sort`$toJSON()
      }
      if (!is.null(self$`direction`)) {
        ChallengePlatformSearchQueryObject[["direction"]] <-
          self$`direction`$toJSON()
      }
      if (!is.null(self$`searchTerms`)) {
        ChallengePlatformSearchQueryObject[["searchTerms"]] <-
          self$`searchTerms`
      }
      ChallengePlatformSearchQueryObject
    },
    #' Deserialize JSON string into an instance of ChallengePlatformSearchQuery
    #'
    #' @description
    #' Deserialize JSON string into an instance of ChallengePlatformSearchQuery
    #'
    #' @param input_json the JSON input
    #' @return the instance of ChallengePlatformSearchQuery
    #' @export
    fromJSON = function(input_json) {
      this_object <- jsonlite::fromJSON(input_json)
      if (!is.null(this_object$`pageNumber`)) {
        self$`pageNumber` <- this_object$`pageNumber`
      }
      if (!is.null(this_object$`pageSize`)) {
        self$`pageSize` <- this_object$`pageSize`
      }
      if (!is.null(this_object$`sort`)) {
        `sort_object` <- ChallengePlatformSort$new()
        `sort_object`$fromJSON(jsonlite::toJSON(this_object$`sort`, auto_unbox = TRUE, digits = NA))
        self$`sort` <- `sort_object`
      }
      if (!is.null(this_object$`direction`)) {
        `direction_object` <- ChallengePlatformDirection$new()
        `direction_object`$fromJSON(jsonlite::toJSON(this_object$`direction`, auto_unbox = TRUE, digits = NA))
        self$`direction` <- `direction_object`
      }
      if (!is.null(this_object$`searchTerms`)) {
        self$`searchTerms` <- this_object$`searchTerms`
      }
      self
    },
    #' To JSON string
    #'
    #' @description
    #' To JSON String
    #'
    #' @return ChallengePlatformSearchQuery in JSON format
    #' @export
    toJSONString = function() {
      jsoncontent <- c(
        if (!is.null(self$`pageNumber`)) {
          sprintf(
          '"pageNumber":
            %d
                    ',
          self$`pageNumber`
          )
        },
        if (!is.null(self$`pageSize`)) {
          sprintf(
          '"pageSize":
            %d
                    ',
          self$`pageSize`
          )
        },
        if (!is.null(self$`sort`)) {
          sprintf(
          '"sort":
          %s
          ',
          jsonlite::toJSON(self$`sort`$toJSON(), auto_unbox = TRUE, digits = NA)
          )
        },
        if (!is.null(self$`direction`)) {
          sprintf(
          '"direction":
          %s
          ',
          jsonlite::toJSON(self$`direction`$toJSON(), auto_unbox = TRUE, digits = NA)
          )
        },
        if (!is.null(self$`searchTerms`)) {
          sprintf(
          '"searchTerms":
            "%s"
                    ',
          self$`searchTerms`
          )
        }
      )
      jsoncontent <- paste(jsoncontent, collapse = ",")
      json_string <- as.character(jsonlite::minify(paste("{", jsoncontent, "}", sep = "")))
    },
    #' Deserialize JSON string into an instance of ChallengePlatformSearchQuery
    #'
    #' @description
    #' Deserialize JSON string into an instance of ChallengePlatformSearchQuery
    #'
    #' @param input_json the JSON input
    #' @return the instance of ChallengePlatformSearchQuery
    #' @export
    fromJSONString = function(input_json) {
      this_object <- jsonlite::fromJSON(input_json)
      self$`pageNumber` <- this_object$`pageNumber`
      self$`pageSize` <- this_object$`pageSize`
      self$`sort` <- ChallengePlatformSort$new()$fromJSON(jsonlite::toJSON(this_object$`sort`, auto_unbox = TRUE, digits = NA))
      self$`direction` <- ChallengePlatformDirection$new()$fromJSON(jsonlite::toJSON(this_object$`direction`, auto_unbox = TRUE, digits = NA))
      self$`searchTerms` <- this_object$`searchTerms`
      self
    },
    #' Validate JSON input with respect to ChallengePlatformSearchQuery
    #'
    #' @description
    #' Validate JSON input with respect to ChallengePlatformSearchQuery and throw an exception if invalid
    #'
    #' @param input the JSON input
    #' @export
    validateJSON = function(input) {
      input_json <- jsonlite::fromJSON(input)
    },
    #' To string (JSON format)
    #'
    #' @description
    #' To string (JSON format)
    #'
    #' @return String representation of ChallengePlatformSearchQuery
    #' @export
    toString = function() {
      self$toJSONString()
    },
    #' Return true if the values in all fields are valid.
    #'
    #' @description
    #' Return true if the values in all fields are valid.
    #'
    #' @return true if the values in all fields are valid.
    #' @export
    isValid = function() {
      if (self$`pageNumber` < 0) {
        return(FALSE)
      }

      if (self$`pageSize` < 1) {
        return(FALSE)
      }

      TRUE
    },
    #' Return a list of invalid fields (if any).
    #'
    #' @description
    #' Return a list of invalid fields (if any).
    #'
    #' @return A list of invalid fields (if any).
    #' @export
    getInvalidFields = function() {
      invalid_fields <- list()
      if (self$`pageNumber` < 0) {
        invalid_fields["pageNumber"] <- "Invalid value for `pageNumber`, must be bigger than or equal to 0."
      }

      if (self$`pageSize` < 1) {
        invalid_fields["pageSize"] <- "Invalid value for `pageSize`, must be bigger than or equal to 1."
      }

      invalid_fields
    },
    #' Print the object
    #'
    #' @description
    #' Print the object
    #'
    #' @export
    print = function() {
      print(jsonlite::prettify(self$toJSONString()))
      invisible(self)
    }
  ),
  # Lock the class to prevent modifications to the method or field
  lock_class = TRUE
)
## Uncomment below to unlock the class to allow modifications of the method or field
# ChallengePlatformSearchQuery$unlock()
#
## Below is an example to define the print function
# ChallengePlatformSearchQuery$set("public", "print", function(...) {
#   print(jsonlite::prettify(self$toJSONString()))
#   invisible(self)
# })
## Uncomment below to lock the class to prevent modifications to the method or field
# ChallengePlatformSearchQuery$lock()

