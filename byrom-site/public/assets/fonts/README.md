# Fonts

Drop the Gotham font files **with these exact filenames** (case-sensitive on Vercel):

```
Gotham-Thin.otf         Gotham-ThinItalic.otf
Gotham-XLight.otf       Gotham-XLightItalic.otf
Gotham-Light.otf        Gotham-LightItalic.otf
Gotham-Book.otf         Gotham-BookItalic.otf
Gotham-Medium.otf       Gotham-MediumItalic.otf
Gotham-Bold.otf         Gotham-BoldItalic.otf
Gotham-Black.otf        Gotham-BlackItalic.otf
Gotham-Ultra.otf        Gotham-UltraItalic.otf
```

Optional accents (Cocon Pro / Bahnschrift / Century Gothic / Helvetica Neue Brand):
```
CoconPro-Light.otf, CoconPro-LightIta.otf, CoconPro-Regular.otf, CoconPro-Ita.otf, CoconPro-Bold.otf, CoconPro-BoldIta.otf
bahnschrift.ttf
GOTHIC.TTF, GOTHICB.TTF
HelveticaNeueBold.otf, HelveticaNeueLightItalic.otf
```

These names match `src/colors_and_type.css`. If you change a filename, also update the matching `@font-face` `src:` URL in that file.
