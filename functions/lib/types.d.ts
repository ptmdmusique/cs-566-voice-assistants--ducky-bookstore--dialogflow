export interface WebhookRequest<Tag extends AvailableIntentName = AvailableIntentName> {
    responseId: string;
    session: string;
    queryResult: {
        queryText: string;
        parameters: Record<string, any>;
        allRequiredParamsPresent: boolean;
        fulfillmentText?: string;
        fulfillmentMessages?: {
            text: {
                text: string[];
            };
        }[];
        outputContexts?: Context[];
        intent: {
            name: string;
            displayName: Tag;
        };
        diagnosticInfo?: Record<string, any>;
        languageCode: string;
    };
    originalDetectIntentRequest?: Record<string, any>;
}
interface Context {
    name: string;
    lifespanCount?: number;
    parameters?: Record<string, any>;
}
export interface WebhookResponse {
    fulfillmentMessages: {
        text: {
            text: string[];
        };
    }[];
    fulfillmentText?: string;
    source?: string;
    payload?: Record<string, any>;
    outputContexts?: Context[];
    followupEventInput?: {
        name: string;
        parameters?: Record<string, any>;
        languageCode?: string;
    };
}
export type AvailableIntentName = "FindPhysicalLocationIntent" | "SearchBooksIntent";
export {};
