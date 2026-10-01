export type LanguageCode = 'fa' | 'ar' | 'ru' | 'tr' | 'en' | 'ps' | 'ur' | 'hy' | 'tk' | 'tg';
export type MessageStatus = 'sending' | 'sent' | 'translating' | 'translated' | 'failed';
export type UserRole = 'manufacturer' | 'merchant';
export type MessageType = 'text' | 'voice';

export interface BaseMessage {
  id: string;
  roomId: string;
  senderId: string;
  senderRole: UserRole;
  senderLang: LanguageCode;
  type: MessageType;
  status: MessageStatus;
  createdAt: string;
}

export interface TextMessage extends BaseMessage {
  type: 'text';
  originalText: string;
  translatedText?: string;
}

export interface VoiceMessage extends BaseMessage {
  type: 'voice';
  originalVoiceUrl: string;
  originalTranscript?: string;
  translatedText?: string;
  translatedVoiceUrl?: string;
}

export type ChatMessage = TextMessage | VoiceMessage;

export interface ChatRoom {
  id: string;
  participants: string[];
  relatedAnnouncementId?: string;
  updatedAt: string;
}

export function mockTranslateFaToEn(text: string): string {
  const map: Record<string, string> = {
    'سلام، برای ۱۰۰ تن میلگرد قیمت بدید.':
      'Hello, please quote a price for 100 tons of rebar.',
  };
  return map[text] ?? `EN: ${text}`;
}
