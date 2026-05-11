export type Instagram = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
  caption?: string;
};

export type InstagramMedia = {
  data: Instagram[];
};
