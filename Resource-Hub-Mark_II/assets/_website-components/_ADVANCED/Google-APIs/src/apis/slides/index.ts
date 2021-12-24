// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {slides_v1} from './v1';

export const VERSIONS = {
  v1: slides_v1.Slides,
};

export function slides(version: 'v1'): slides_v1.Slides;
export function slides(options: slides_v1.Options): slides_v1.Slides;
export function slides<T = slides_v1.Slides>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | slides_v1.Options
) {
  return getAPI<T>('slides', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {slides_v1};
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
