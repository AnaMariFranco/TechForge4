abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
  abstract getResults(): object;
}

class Election extends VoteSystem {
  private votes: Record<string, number> = {};

  voteFor(candidate: string): void {
    this.votes[candidate] = (this.votes[candidate] || 0) + 1;
  }

  getResults(): object {
    return this.votes;
  }
}

class Poll extends VoteSystem {
  private votes: Record<string, number> = {};

  voteFor(candidate: string): void {
    this.votes[candidate] = (this.votes[candidate] || 0) + 1;
  }

  getResults(): object {
    const sortedVotes = Object.entries(this.votes).sort((a, b) => b[1] - a[1]);
    return Object.fromEntries(sortedVotes);
  }
}

const election = new Election();
election.voteFor('Candidato A');
election.voteFor('Candidato B');
election.voteFor('Candidato A');
console.log(election.getResults());

const poll = new Poll();
poll.voteFor('Candidato A');
poll.voteFor('Candidato B');
poll.voteFor('Candidato A');
console.log(poll.getResults());