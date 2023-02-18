export interface Poll {
  id: number;
  start_date: Date;
  end_date: Date;
  userId: number;
  title: string;
  category: PollCategory[];
  choices: PollChoice[];
}

export type PollChoice = {
  id: number;
  value: string;
  votes: PollVote[];
};

export type PollVote = {
  id: number;
  pollChoiceId: number;
  userId: number;
};

export type PollCategory = string;
