import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Votes } from '../../votes.model';

@Component({
  selector: 'app-arrowbox',
  templateUrl: './arrowbox.component.html',
  styleUrls: ['./arrowbox.component.css']
})
export class ArrowboxComponent implements OnInit {
  @Input() votes: Votes;

  @Output() voteEvent = new EventEmitter<Votes>();

  constructor() {
  }

  onUpVote() {
    // If neither upVoted nor downVoted
    if (!this.votes.isUpVoted && !this.votes.isDownVoted) {
      this.votes.isUpVoted = true;

      this.voteEvent.emit(this.votes);
    } else if (!this.votes.isUpVoted && this.votes.isDownVoted) {
      this.votes.isDownVoted = false;
      this.votes.isUpVoted = true;

      this.voteEvent.emit(this.votes);
    } else if (this.votes.isUpVoted && !this.votes.isDownVoted) {
      this.votes.isUpVoted = false;

      this.voteEvent.emit(this.votes);
    }
  }

  onDownVote() {
    if (!this.votes.isDownVoted && !this.votes.isUpVoted) {
      this.votes.isDownVoted = true;

      this.voteEvent.emit(this.votes);
    } else if (!this.votes.isDownVoted && this.votes.isUpVoted) {
      this.votes.isUpVoted = false;
      this.votes.isDownVoted = true;

      this.voteEvent.emit(this.votes);
    } else if (this.votes.isDownVoted && !this.votes.isUpVoted) {
      this.votes.isDownVoted = false;

      this.voteEvent.emit(this.votes);
    }
  }

  onLeftVote() {
    if (!this.votes.isLeftVoted && !this.votes.isRightVoted) {
      this.votes.isLeftVoted = true;

      this.voteEvent.emit(this.votes);
    } else if (!this.votes.isLeftVoted && this.votes.isRightVoted) {
      this.votes.isRightVoted = false;
      this.votes.isLeftVoted = true;

      this.voteEvent.emit(this.votes);
    } else if (this.votes.isLeftVoted && !this.votes.isRightVoted) {
      this.votes.isLeftVoted = false;

      this.voteEvent.emit(this.votes);
    }
  }

  onRightVote() {
    if (!this.votes.isRightVoted && !this.votes.isLeftVoted) {
      this.votes.isRightVoted = true;

      this.voteEvent.emit(this.votes);
    } else if (!this.votes.isRightVoted && this.votes.isLeftVoted) {
      this.votes.isLeftVoted = false;
      this.votes.isRightVoted = true;

      this.voteEvent.emit(this.votes);
    } else if (this.votes.isRightVoted && !this.votes.isLeftVoted) {
      this.votes.isRightVoted = false;

      this.voteEvent.emit(this.votes);
    }
  }

  ngOnInit() {
  }

}
