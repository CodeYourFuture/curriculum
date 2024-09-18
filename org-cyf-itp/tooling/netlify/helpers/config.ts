import Joi from "joi";
import * as dotenv from "dotenv";

dotenv.config();

const schema = Joi.object({
  NODE_ENV: Joi.string().valid("dev", "prod", "test").default("dev"),
  defaultRepo: Joi.string().default("My-Coursework-Planner"),
  defaultOwner: Joi.string().default("CodeYourFuture"),
  github: Joi.object({
    oauth: Joi.object({
      clientId: Joi.string().required(),
      clientSecret: Joi.string().required(),
    }),
  }),
  domain: Joi.string().default("localhost"),
});

const config = () => {
  const { value, error } = schema.validate(
    {
      NODE_ENV: process.env.NODE_ENV,
      defaultRepo: process.env.DEFAULT_REPO,
      defaultOwner: process.env.DEFAULT_OWNER,
      github: {
        oauth: {
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
      },
      // Netlify sets this env var correctly for both prod deploys and deploy previews.
      domain: process.env.URL,
    },
    { abortEarly: false }
  );

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return value;
};

export default config;
