interface Image {
	src?: string;
	alt?: string;
}

interface Author {
	name: string;
	avatar: string;
	url: string;
	verified?: boolean;
	description?: string;
	email: string;
}

interface Post {
	_path: string;
	title: string;
	description?: string;
	created_at: string;
	updated_at: string;
	image: Image[];
	author: Author;
	category: string[];
	tags: string[];
}