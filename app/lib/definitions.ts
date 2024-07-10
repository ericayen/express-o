export type Coffee = {
	coffee_id: number;
	coffee_type: string;
	region: string;
	history: string;
	countries: string;
	acidity: string;
	flavour: string;
	roast_profile: string;
};

export type Comment = {
	comment_id: string;
	name: string;
	avatar: string;
	comment: string;
	date: string;
};

export type Question = {
	question_id: number;
	question: string;
};

export type Response = {
	response_id: number;
	question_id: number;
	option: string;
	coffee_ids: string;
};
