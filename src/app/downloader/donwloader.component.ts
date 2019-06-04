download() {
  this.downloaderService.getTextFile('assets/textfile.txt')
    .subscribe(results => this.contents = results);
}