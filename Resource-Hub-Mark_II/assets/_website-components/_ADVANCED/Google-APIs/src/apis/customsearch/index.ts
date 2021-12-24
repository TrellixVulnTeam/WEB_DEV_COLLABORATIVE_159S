// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {customsearch_v1} from './v1';

export const VERSIONS = {
  v1: customsearch_v1.Customsearch,
};

export function customsearch(version: 'v1'): customsearch_v1.Customsearch;
export function customsearch(
  options: customsearch_v1.Options
): customsearch_v1.Customsearch;
export function customsearch<T = customsearch_v1.Customsearch>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | customsearch_v1.Options
) {
  return getAPI<T>('customsearch', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {customsearch_v1};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  GaxiosPromise,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';
