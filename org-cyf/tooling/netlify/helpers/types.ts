import { components } from "@octokit/openapi-types";

export type Issue = components["schemas"]["issue"];
export type Milestone = components["schemas"]["milestone"];

export class CloneResponse {
  total: number = 0;

  failed: number = 0;

  skipped: number = 0;

  constructor(total: number) {
    this.total = total;
  }
}

export type RequestState = {
  prevURL: string;
  module: string;
  sprint?: string;
  issue?: number;
};
