<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/ad34a1de-068f-41ea-87f6-f32a0d441cf2"/>
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/34a7109d-6201-4f22-a5da-7fb535fb51ee"/>
  <img alt="Liquid CSS" src="https://github.com/user-attachments/assets/34a7109d-6201-4f22-a5da-7fb535fb51ee" width="300"/>
</picture>

Refractive chromatic aberration effects in CSS.

```console
npm install liquid-css
```

```console
yarn add liquid-css
```

## Materials

Liquid CSS works in CSS classes starting with `.material`. Most materials feature a gradient border from light to dark, a drop shadow, an inset glow, background blend darkening, and finally, rounding.

### `.glass`

<img width="442" height="174" alt="Screenshot 2025-08-05 at 17 02 39" src="https://github.com/user-attachments/assets/dc970f68-1587-40db-9e53-7ef570167f0a" />

Glass gives an opaque, saturated, refractive, chromatic aberrated backdrop filter meant for materials where seeing through them is preferred. For example, a range slider could have a thumb made of glass.

It is not recommended to make a button out of glass, for example, unless it is placed on top of a less transparent material, such as Ice.

### `.ice`

<img width="418" height="202" alt="Screenshot 2025-08-05 at 17 00 15" src="https://github.com/user-attachments/assets/2b8aa038-0fb7-4785-8b6f-c3156fb97827" />

Ice gives an opaque, frosted/blurred, refractive chromatic aberrated backdrop filter meant for most materials, especially those on top of content, images, video, etc.

For a darker background to the ice, use `.black-ice`.

### `.bubble`

<img width="484" height="195" alt="Screenshot 2025-08-05 at 17 00 41" src="https://github.com/user-attachments/assets/1682276a-34e2-4112-857a-d59a85c27a52" />

Bubble is an opaque, saturated, iridescent, distorted backdrop filter, meant to be a fun effect on a material.

### `.water`

<img width="447" height="227" alt="Screenshot 2025-08-05 at 17 01 02" src="https://github.com/user-attachments/assets/fd476c47-4104-4c8e-8dde-84e189e570f1" />

Water is an animated, saturated, opaque, bluish, distorted backdrop filter, meant to be a fun effect on a material.

---

Apply these classes individually to containers, buttons, etc., to get the same effects.

