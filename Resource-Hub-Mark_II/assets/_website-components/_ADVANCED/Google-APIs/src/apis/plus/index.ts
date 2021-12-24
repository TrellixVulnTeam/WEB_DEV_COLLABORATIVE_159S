// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.




/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {plus_v1} from './v1';

export const VERSIONS = {
  v1: plus_v1.Plus,
};

export function plus(version: 'v1'): plus_v1.Plus;
export function plus(options: plus_v1.Options): plus_v1.Plus;
export function plus<T = plus_v1.Plus>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | plus_v1.Options
) {
  return getAPI<T>('plus', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {plus_v1};
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
