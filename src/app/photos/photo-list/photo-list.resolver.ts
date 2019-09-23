import { Injectable } from "@angular/core";

import { PhotoService } from "../photo/photo.service";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Photo } from "../photo/photo.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const userName = route.params.userName;

        return this.service.listFromUserPaginated(userName, 1);
    }
    
    constructor(private service: PhotoService) {
        
        
    }
}