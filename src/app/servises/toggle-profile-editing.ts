export class ToggleProfileEditing {
  public isProfileEditingVisible: boolean = false;

  public toggleProfileEditing(event: Event): void {
    event.preventDefault();
    this.isProfileEditingVisible = !this.isProfileEditingVisible;
  }
}
