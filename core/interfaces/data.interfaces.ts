export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface AppState {
  count: number;
  error: null | Error;
  lastUpdate: number;
  light: boolean;
  placeholderData: User[] | null;
  Entry: any | null;
  Comment: any | null;
  Keyword: any | null;
  HasKeyword: any | null;
  HasTag: any | null;
  ReactionTypes: any | null;
  HasPermissions: any | null;
  HasCommentUser: any | null;
  HasSeen: any | null;
  HasHiddenKeyword: any | null;
  HiddenKeyword: any | null;
  ReactionAll: any | null;
  HasEntry: any | null;
  ReactionUser: any | null;
  User: any | null;
  Tag: any | null;
  HasComment: any | null;
  HasRelatedEntry: any | null;
}
