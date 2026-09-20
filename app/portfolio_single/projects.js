import data from "./data";

export const projects = Object.entries(data).map(([id, project]) => ({
  id: Number(id),
  ...project,
}));

export const projectHref = (slug) => "/portfolio_single/" + slug;

export const getProject = (slug) => projects.find((p) => p.slug === slug);

// Old links used /portfolio_single?id=N; kept so existing URLs can be redirected.
export const projectSlugById = (id) => data[id]?.slug;
