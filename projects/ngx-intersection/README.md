# NgxIntersection

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.
This component handles the intersection point of viewport with observed element.
[DEMO](https://stackblitz.com/edit/angular-aj7f19?file=src/main.ts)

# Installation

Use this following command to install:

```bash
npm i ngx-intersection
```

# Usage

You can import the component(standalone component) into your module or component which you want to use:

```
import { NgxIntersectionComponent } from 'ngx-intersection';

@NgModule({
  declarations: [YourComponent],
  imports: [NgxIntersectionComponent],
})
export class YourModule {}
```

# Using

`HTML` template:

```
<ngx-intersection (isIntersecting)="handleIntersection()" [threshold]="threshold">
<!-- Your markup here -->
</ngx-intersection>
```

`TS`:

```
// default value is 0.75
threshold = 0.25;

handleIntersection() {
    // do smth
}
```

\*\*\* `threshold` is the percentage of the observed element within the root. Use this to trigger an intersection when a percentage of the observed element is within the root i.e. trigger when 65% of my element is within the viewport (root). Values are % based between 0 and 1. i.e. threshold: .65
