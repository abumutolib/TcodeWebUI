"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = exports.TutorialUI = exports.TutorialApiClient = void 0;
class TutorialApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    callWebApi(url, verb, data, callback) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            callback(data);
        };
        xhr.onerror = function () {
            alert("Error messege");
        };
        let httpVerb;
        switch (verb) {
            case HttpVerbs.GET:
                httpVerb = "GET";
                break;
            case HttpVerbs.POST:
                httpVerb = "POST";
                break;
            case HttpVerbs.PUT:
                httpVerb = "PUT";
                break;
            case HttpVerbs.DELETE:
                httpVerb = "DELETE";
                break;
        }
        xhr.open(httpVerb, url);
        xhr.setRequestHeader("Content-Type", "application/json");
        if (data == null) {
            xhr.send();
        }
        else {
            xhr.send(JSON.stringify(data));
        }
    }
    getById(id, callback) {
        this.callWebApi(`${this.baseUrl}/${id}`, HttpVerbs.GET, null, callback);
    }
}
exports.TutorialApiClient = TutorialApiClient;
class TutorialUI {
    getByIdCallback(data) {
        alert(data.htmlContent);
    }
}
exports.TutorialUI = TutorialUI;
class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    requestOptions(data, verb) {
        let initObject;
        let httpVerb;
        switch (verb) {
            case HttpVerbs.GET:
                httpVerb = "GET";
                break;
            case HttpVerbs.POST:
                httpVerb = "POST";
                break;
            case HttpVerbs.PUT:
                httpVerb = "PUT";
                break;
            case HttpVerbs.DELETE:
                httpVerb = "DELETE";
                break;
        }
        let requestHeader = new Headers();
        requestHeader.append("Content-Type", "application/json");
        if (data != null) {
            initObject = {
                method: httpVerb,
                headers: requestHeader,
                body: JSON.stringify(data)
            };
        }
        else {
            initObject = {
                method: httpVerb,
                headers: requestHeader
            };
        }
        return initObject;
    }
    callWebApi(url, verb, data, callback) {
        let initObject = this.requestOptions(data, verb);
        fetch(url, initObject)
            .then((response) => {
            return response.json();
        })
            .then((json) => {
            callback(json);
        })
            .catch((error) => {
            console.log(error);
        });
    }
    getById(id, callback) {
        this.callWebApi(`${this.baseUrl}/${id}`, HttpVerbs.GET, null, callback);
    }
}
exports.ApiClient = ApiClient;
var HttpVerbs;
(function (HttpVerbs) {
    HttpVerbs[HttpVerbs["GET"] = 0] = "GET";
    HttpVerbs[HttpVerbs["POST"] = 1] = "POST";
    HttpVerbs[HttpVerbs["PUT"] = 2] = "PUT";
    HttpVerbs[HttpVerbs["DELETE"] = 3] = "DELETE";
})(HttpVerbs || (HttpVerbs = {}));
