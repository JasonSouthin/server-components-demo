/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {fetch} from 'react-fetch';

export const POST = (url, parameters) => {

    let accessToken = "7f16944b0936d712cb80889f6d909bb7ae8d76cd";

    const response = fetch(url, {
        body: JSON.stringify(parameters),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Cookie: `_cosmos_auth=${ accessToken }`
        },
        method: "POST",
        cache: "no-cache",
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer"
    });

    return response.json();
};
