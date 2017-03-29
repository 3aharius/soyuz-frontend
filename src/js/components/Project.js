export default class Project {

	constructor(project) {
		let {id, img, title, description} = project;
		this.id = id;
		this.img = DYN_IMAGES_PUBLIC_PATH + img;
		this.href = '/projects/' + toSeoName(title);
		this.title = title;
		this.description = description;
	}

}

export function toSeoName(title) {
	return title ? title.toLowerCase().replace(/\s+/g, '_') : undefined;
}