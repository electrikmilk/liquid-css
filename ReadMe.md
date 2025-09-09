<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/eb546714-bb4f-4818-b673-5b446102f13e"/>
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/34a7109d-6201-4f22-a5da-7fb535fb51ee"/>
  <img alt="Liquid CSS" src="https://github.com/user-attachments/assets/34a7109d-6201-4f22-a5da-7fb535fb51ee" width="300"/>
</picture>

Refractive chromatic aberration effects in CSS.

Note that only Chrome-based browsers support this for now.

## Usage

**NPM:**

```console
npm install liquid-css
```

**Yarn:**

```console
yarn add liquid-css
```

**Import:**

```javascript
import 'liquid-css'
```

## Materials

Liquid CSS works in CSS classes starting with `.material`. Most materials feature a gradient border from light to dark, a drop shadow, an inset glow, background blend darkening, and finally, rounding.

### Glass

<img width="804" height="312" alt="Screenshot 2025-08-05 at 23 31 20" src="https://github.com/user-attachments/assets/b693cb20-a414-4f0d-82db-fd0060915100" />

```html
<div class="material glass"></div>
```

Glass gives a transparent, saturated, refractive, chromatic aberrated backdrop filter meant for materials where seeing through them is preferred. For example, a range slider could have a thumb made of glass.

It is not recommended to make a button out of glass, for example, unless it is placed on top of a less transparent material, such as Ice.

### Ice

<img width="801" height="308" alt="Screenshot 2025-08-05 at 23 31 10" src="https://github.com/user-attachments/assets/2e8108a2-1909-42a1-953c-5436b81e0ca7" />

```html
<div class="material ice"></div>
```

Ice gives an opaque, saturated, frosted/blurred, refractive chromatic aberrated backdrop filter meant for most materials, especially those with content, particularly text on top of them.

### Black Ice

For a darker background to the ice, use `.black-ice`.

<img width="806" height="313" alt="Screenshot 2025-08-05 at 23 31 33" src="https://github.com/user-attachments/assets/5c3aafde-7586-45e3-8256-d3f2b162e947" />

```html
<div class="material black-ice"></div>
```

---

Apply these classes individually to containers, buttons, etc., to get the same effects.



