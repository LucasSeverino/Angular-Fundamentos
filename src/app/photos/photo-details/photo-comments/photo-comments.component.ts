import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { switchMap } from 'rxjs/operators'
import { tap } from 'rxjs/operators'

import { PhotoService } from "../../photo/photo.service";
import { PhotoComment } from "../../photo/photo-comment.model";

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {
    
    @Input() photoId: number;
    comments$: Observable<PhotoComment[]>;
    commentForm: FormGroup;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.comments$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)]
        });
    }

    save() {
        
        this.comments$ = this.photoService.addComment(this.photoId, this.commentForm.get('comment').value as string)
            .pipe(
                switchMap(() => this.photoService.getComments(this.photoId)),
                tap(() => {
                    this.commentForm.reset();
                })
            );
    }

}