import config from "../config";

const IMAGE =
  process.env.NODE_ENV === "development"
    ? config.image.development
    : config.image.production;

export {
  IMAGE,
};