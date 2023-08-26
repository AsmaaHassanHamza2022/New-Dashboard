import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";

export class TranslationHttpLoader implements TranslateLoader {
    constructor(private httpClient: HttpClient) {}
  
  
    public getTranslation(lang: string): Observable<Object> {
      if (lang == null) {
        lang == "en";
      }
  
      let urls:any = {
        en: "https://run.mocky.io/v3/33f736b0-e73a-499e-8a50-01e66041d634",
        pt: "https://run.mocky.io/v3/db1e37da-342e-4918-8ce2-bd30aa12fe79",
        fr: "https://run.mocky.io/v3/6960c960-ea66-42a0-87f1-f34568ecb740"
      };
  
      let observer:any = new Observable(observer => {
        this.httpClient.get(urls[lang]).subscribe(
          (data :any) => {
            observer.next(data);
            observer.complete();
          }
        );
      });
      return observer;
    }
  }