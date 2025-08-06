<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/ad34a1de-068f-41ea-87f6-f32a0d441cf2"/>
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/34a7109d-6201-4f22-a5da-7fb535fb51ee"/>
  <img alt="Liquid CSS" src="https://github.com/user-attachments/assets/34a7109d-6201-4f22-a5da-7fb535fb51ee" width="300"/>
</picture>

Refractive chromatic aberration effects in CSS.

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
import 'liquid-css/src/main.js'
```

## Materials

Liquid CSS works in CSS classes starting with `.material`. Most materials feature a gradient border from light to dark, a drop shadow, an inset glow, background blend darkening, and finally, rounding.

### `.glass`

<img width="804" height="312" alt="Screenshot 2025-08-05 at 23 31 20" src="https://github.com/user-attachments/assets/66df6d3c-2d31-47c9-9129-1ad438c2ae0d" />

Glass gives a transparent, saturated, refractive, chromatic aberrated backdrop filter meant for materials where seeing through them is preferred. For example, a range slider could have a thumb made of glass.

It is not recommended to make a button out of glass, for example, unless it is placed on top of a less transparent material, such as Ice.

### `.ice`

<img width="804" height="312" alt="Screenshot 2025-08-05 at 23 31 20" src="https://github.com/user-attachments/assets/d0ba1964-7e49-4c1b-995e-734783a245c3" />

Ice gives an opaque, saturated, frosted/blurred, refractive chromatic aberrated backdrop filter meant for most materials, especially those on top of content, images, video, etc.

For a darker background to the ice, use `.black-ice`.

<img width="806" height="313" alt="Screenshot 2025-08-05 at 23 31 33" src="https://github.com/user-attachments/assets/5c3aafde-7586-45e3-8256-d3f2b162e947" />

---

Apply these classes individually to containers, buttons, etc., to get the same effects.





