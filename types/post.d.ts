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
	draft?: boolean;
	description?: string;
	created_at: string;
	updated_at: string;
	image: Image[];
	author: Author;
	category: string[];
	tags: string[];
	body: {
		toc: {
			title: string;
			searchDepth: number;
			depth: number;
			links: {
				id: string;
				depth: number;
				text: string;
			}[]
		}
	}
}

interface TOCItem {
  id: string;
  depth: number;
  text: string;
}

interface TOCData {
  title: string;
  searchDepth: number;
  depth: number;
  links: TOCItem[];
}