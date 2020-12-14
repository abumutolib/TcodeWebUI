import { ITutorial } from "./ITutorial";


    export class TutorialApiClient {
        private baseUrl: string;

        constructor(baseUrl: string) {
            this.baseUrl = baseUrl;
        }

        private callWebApi(url: string, verb: HttpVerbs, data: ITutorial | null, callback: any): void {
            let xhr = new XMLHttpRequest();

            xhr.onload = function () {
                let data = JSON.parse(xhr.responseText);
                callback(data);
            }

            xhr.onerror = function () {
                alert("Error messege");
            }

            let httpVerb: string;
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

        getById(id: number, callback: any): void {
            this.callWebApi(`${this.baseUrl}/${id}`, HttpVerbs.GET, null, callback);
        }

    }

    export class TutorialUI {
        getByIdCallback(data: ITutorial): void {
            alert(data.htmlContent);
        }
    }

    export class ApiClient<T> {
        private baseUrl: string;

        constructor(baseUrl: string) {
            this.baseUrl = baseUrl;
        }

        private requestOptions(data: T | null, verb: HttpVerbs): RequestInit {
            let initObject: RequestInit;
            let httpVerb: string;
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

        private callWebApi(url: string, verb: HttpVerbs, data: T | null, callback: (object: T) => void): void
        {
            let initObject = this.requestOptions(data, verb);
            fetch(url, initObject)
                .then((response) => {   
                    return response.json();
                })
                .then((json) => {
                    callback(json as T);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        public getById(id: number, callback: (object: T) => void): void {
            this.callWebApi(`${this.baseUrl}/${id}`, HttpVerbs.GET, null, callback);
        }

        
    }

enum HttpVerbs {
    GET, POST, PUT, DELETE
}