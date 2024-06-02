interface Image {
	src?: string;
	alt?: string;
}

interface Author {
	name: string;
	avatar: Image;
	url: string;
	desc?: string;
}

interface Post {
	_path: string;
	title: string;
	description?: string;
	created_at: string;
	updated_at: string;
	image: Image[];
	author: Author;
}