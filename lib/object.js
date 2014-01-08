module.exports = {
  draw: function draw() {
    this.context.translate(self.x, self.y);
    this.context.rotate(self.direction);
  }

}
