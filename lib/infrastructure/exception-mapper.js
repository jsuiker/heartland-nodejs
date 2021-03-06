'use strict';

var exceptions = {
        "exception_mappings": [
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": ["02", "03", "04", "05", "41", "43", "44", "51", "56", "61", "62", "63", "65", "78" ],
                "mapping_type": "CardException",
                "mapping_code": "card_declined",
                "mapping_message": "Exception_Message_CardDeclined"
            },
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": [ "06", "07", "12", "15", "19", "12", "52", "53", "57", "58", "76", "77", "91", "96", "EC" ],
                "mapping_type": "CardException",
                "mapping_code": "processing_error",
                "mapping_message": "Exception_Message_ProcessingError"
            },
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": [ "13" ],
                "mapping_type": "CardException",
                "mapping_code": "invalid_amount",
                "mapping_message": "Exception_Message_ChargeAmount"
            },
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": [ "14" ],
                "mapping_type": "CardException",
                "mapping_code": "incorrect_number",
                "mapping_message": "Exception_Message_IncorrectNumber"
            },
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": [ "54" ],
                "mapping_type": "CardException",
                "mapping_code": "expired_card",
                "mapping_message": "Exception_Message_CardExpired"
            },
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": [ "55" ],
                "mapping_type": "CardException",
                "mapping_code": "invalid_pin",
                "mapping_message": "Exception_Message_InvalidPin"
            },
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": [ "75" ],
                "mapping_type": "CardException",
                "mapping_code": "pin_retries_exceeded",
                "mapping_message": "Exception_Message_PinExceeded"
            },
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": [ "80" ],
                "mapping_type": "CardException",
                "mapping_code": "invalid_expiry",
                "mapping_message": "Exception_Message_InvalidExpiry"
            },
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": [ "80" ],
                "mapping_type": "CardException",
                "mapping_code": "invalid_expiry",
                "mapping_message": "Exception_Message_InvalidExpiry"
            },
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": [ "86" ],
                "mapping_type": "CardException",
                "mapping_code": "pin_verification",
                "mapping_message": "Exception_Message_PinVerification"
            },
            {
                "object": "exception_mapping",
                "category": "issuer",
                "exception_codes": [ "EB", "N7" ],
                "mapping_type": "CardException",
                "mapping_code": "incorrect_cvc",
                "mapping_message": "Exception_Message_IncorrectCvc"
            },
            {
                "object": "exception_mapping",
                "category": "gateway",
                "exception_codes": [ "-2" ],
                "mapping_type": "AuthenticationException",
                "mapping_message": "Exception_Message_AuthenticationError"
            },
            {
                "object": "exception_mapping",
                "category": "gateway",
                "exception_codes": [ "1" ],
                "mapping_type": "HpsException"
            },
            {
                "object": "exception_mapping",
                "category": "gateway",
                "exception_codes": [ "3" ],
                "mapping_type": "HpsException",
                "mapping_code": "invalid_original_transaction"
            },
            {
                "object": "exception_mapping",
                "category": "gateway",
                "exception_codes": [ "5" ],
                "mapping_type": "HpsException",
                "mapping_code": "no_open_batch"
            },
            {
                "object": "exception_mapping",
                "category": "gateway",
                "param": "card",
                "exception_codes": [ "12" ],
                "mapping_type": "InvalidRequestException",
                "mapping_code": "invalid_cpc_data",
                "mapping_message": "Exception_Message_InvalidCpcData"
            },
            {
                "object": "exception_mapping",
                "category": "gateway",
                "param": "card",
                "exception_codes": [ "13" ],
                "mapping_type": "InvalidRequestException",
                "mapping_code": "invalid_card_data",
                "mapping_message": "Exception_Message_InvalidCardData"
            },
            {
                "object": "exception_mapping",
                "category": "gateway",
                "exception_codes": [ "14" ],
                "mapping_type": "CardException",
                "mapping_code": "invalid_number",
                "mapping_message": "Exception_Message_InvalidNumber"
            },
            {
                "object": "exception_mapping",
                "category": "gateway",
                "exception_codes": [ "30" ],
                "mapping_type": "HpsException",
                "mapping_message": "Exception_Message_GatewayTimedOut"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "param": "gatewayTransactionId",
                "exception_codes": [ "0" ],
                "mapping_type": "InvalidRequestException",
                "mapping_code": "invalid_transaction_id",
                "mapping_message": "Exception_Message_TransactionIdLessThanEqualZero"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "param": "HpsServiceUri",
                "exception_codes": [ "1" ],
                "mapping_type": "InvalidRequestException",
                "mapping_code": "sdk_exception",
                "mapping_message": "Exception_Message_InvalidGatewayUrl"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "exception_codes": [ "2" ],
                "mapping_type": "ApiConnectionException",
                "mapping_code": "sdk_exception",
                "mapping_message": "Exception_Message_UnableToProcessTransaction"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "param": "start",
                "exception_codes": [ "3" ],
                "mapping_type": "InvalidRequestException",
                "mapping_code": "invalid_date",
                "mapping_message": "Exception_Message_FutureDate"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "param": "end",
                "exception_codes": [ "4" ],
                "mapping_type": "InvalidRequestException",
                "mapping_code": "invalid_date",
                "mapping_message": "Exception_Message_FutureDate"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "param": "currency",
                "exception_codes": [ "5" ],
                "mapping_type": "InvalidRequestException",
                "mapping_code": "missing_currency",
                "mapping_message": "Exception_Message_ArgumentNull"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "param": "currency",
                "exception_codes": [ "6" ],
                "mapping_type": "InvalidRequestException",
                "mapping_code": "invalid_currency",
                "mapping_message": "Exception_Message_InvalidCurrency"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "param": "amount",
                "exception_codes": [ "7" ],
                "mapping_type": "InvalidRequestException",
                "mapping_code": "invalid_amount",
                "mapping_message": "Exception_Message_ChargeAmount"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "exception_codes": [ "8" ],
                "mapping_type": "HpsException",
                "mapping_code": "gateway_timeout",
                "mapping_message": "Exception_Message_UnableToReverseTransactionAfterGatewayTimeout"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "exception_codes": [ "9" ],
                "mapping_type": "HpsException",
                "mapping_code": "issuer_timeout",
                "mapping_message": "Exception_Message_UnableToReverseTransactionAfterIssuerTimeout"
            },
            {
                "object": "exception_mapping",
                "category": "sdk",
                "exception_codes": [ "10" ],
                "mapping_type": "CardException",
                "mapping_code": "processing_error",
                "mapping_message": "Exception_Message_ProcessingError"
            }
        ],
        "exception_messages": [
            {
                "object": "exception_message",
                "code": "Exception_Message_ArgumentNull",
                "message": "Argument can't be null."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_AuthenticationError",
                "message": "Authentication error. Please double check your service configuration."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_CardDeclined",
                "message": "The card was declined."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_CardExpired",
                "message": "The card has expired."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_ChargeAmount",
                "message": "Must be greater than or equal 0."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_FutureDate",
                "message": "Date can not be in the future."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_IncorrectCvc",
                "message": "The card's security code is incorrect."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_IncorrectNumber",
                "message": "The card number is incorrect."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_InvalidConfig",
                "message": "The HPS SDK has not been properly configured. Please make sure to initialize the config either in a service constructor or in your App.config or Web.config file."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_InvalidCurrency",
                "message": "The only supported currency is \"usd\""
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_InvalidExpiry",
                "message": "Card expiration date is invalid."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_InvalidNumber",
                "message": "The card number is not a valid credit card number."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_InvalidPin",
                "message": "The 4-digit pin is invalid."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_PinExceeded",
                "message": "Maximum number of pin retries exceeded."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_PinVerification",
                "message": "Can't verify card pin number."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_ProcessingError",
                "message": "An error occurred while processing the card."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_TransactionIdLessThanEqualZero",
                "message": "Transaction ID must be greater than zero."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_UnexpectedResponseCode",
                "message": "Unsuccessful response code ({0}) received from HPS Gateway."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_UnexpectedResponseType",
                "message": "Received unexpected response from POS Gateway. (Request and response transaction types don't match)."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_InvalidCpcData",
                "message": "Invalid CPC data."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_InvalidCardData",
                "message": "Invalid card data."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_GatewayTimedOut",
                "message": "Gateway timed out."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_InvalidGatewayUrl",
                "message": "Invalid HpsServiceUri."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_UnableToProcessTransaction",
                "message": "Unable to process the payment transaction."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_UnableToReverseTransactionAfterGatewayTimeout",
                "message": "Error occurred while reversing a charge due to HPS gateway time-out."
            },
            {
                "object": "exception_message",
                "code": "Exception_Message_UnableToReverseTransactionAfterIssuerTimeout",
                "message": "Error occurred while reversing a charge due to issuer time-out."
            }
        ]
    },
    exceptionForCategoryAndCode = function (category, code) {
        var i, mapping, categoryMappings = [];
        for (i = 0; i < exceptions.exception_mappings.length; i++) {
            mapping = exceptions.exception_mappings[i];
            if (mapping.category === category) {
                categoryMappings.push(mapping);
            }
        }

        if (category === 'sdk') {
            for (i = 0; i < categoryMappings.length; i++) {
                if (categoryMappings[i].mapping_code === code) {
                    return categoryMappings[i];
                }
            }
        } else {
            for (i = 0; i < categoryMappings.length; i++) {
                if (categoryMappings[i].exception_codes.indexOf(code.toString()) >= 0) {
                    return categoryMappings[i];
                }
            }
        }

        return null;
    },
    messageForMapping = function (mapping, originalResponseText) {
        var messageCode = mapping.mapping_message, message, i;
        if (messageCode) {
            for (i = 0; i < exceptions.exception_messages.length; i++) {
                message = exceptions.exception_messages[i];
                if (message.code === messageCode) { return message.message; }
            }
        }

        return originalResponseText;
    },
    exceptionMapper = {
        mapGatewayException: function (gatewayTxnId, gatewayRspCode, gatewayRspMsg) {
            var mapping = exceptionForCategoryAndCode('gateway', gatewayRspCode), message, error;

            if (mapping) {
                message = messageForMapping(mapping, gatewayRspMsg);
                error = new Error(message);
                error.type = mapping.mapping_type;
                error.code = mapping.code;

                if (error.type === 'CardException') {
                    error.transactionId = gatewayTxnId;
                } else if (error.type === 'InvalidRequestException') {
                    error.param = mapping.param;
                } else if (!error.code) {
                    error.code = 'unknown';
                }

                return error;
            }

            return new Error(gatewayRspMsg);
        },
        mapIssuerException: function (gatewayTxnId, rspCode, rspText) {
            var mapping = exceptionForCategoryAndCode('issuer', rspCode), error;

            if (mapping) {
                error = new Error(messageForMapping(mapping, rspText));
                error.code = mapping.code;
                error.type = 'CardException';
                error.transactionId = gatewayTxnId;
                return error;
            }

            error = new Error(rspText);
            error.code = 'unknown_card_exception';
            error.type = 'CardException';
            error.transactionId = gatewayTxnId;
            return error;
        },
        mapSdkException: function (errorCode, innerException) {
            var mapping = exceptionForCategoryAndCode('sdk', errorCode),
                error = new Error(errorCode);

            if (mapping) {
                error.message = messageForMapping(mapping, null);
                error.code = mapping.code;
                error.type = mapping.mapping_type;

                if (error.type === 'InvalidRequestException') {
                    error.param = mapping.param;
                }

                if (error.type === 'ApiConnectionException') {
                    error.innerException = innerException;
                } else if (!error.code) {
                    error.code = 'unknown';
                }
            } else {
                error.code = 'unknown';
                error.innerException = innerException;
            }

            return error;
        }
    };

module.exports = exceptionMapper;