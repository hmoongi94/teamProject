export function introduceComponent(stateData) {
  function createElement(type, props, ...children) {

    if (type === 'img') {
      return { type, props: { ...props, alt: props.alt || '' }, children };
    }
    return { type, props, children };
  }

  const profile = createElement("div",{ class: "profile"}, createElement("img", { class: "picture", src: stateData.profile, alt: "ProfilePicture" }));

  const name = createElement("div", { class: "name"}, "name: ", stateData.name);
  const contactGithub = createElement("div", { class: "github"}, "contact: ", `github-> ${stateData.contact.github} `);
  const contactEmail = createElement("div", { class: 'email'}, `Email-> ${stateData.contact.email}`)
  const introduce = createElement("div", { class: 'introduce'}, "introduce: ", stateData.introduce);

  return createElement("div", { class: "introduceUI" }, profile, name, contactGithub, contactEmail, introduce );
}
