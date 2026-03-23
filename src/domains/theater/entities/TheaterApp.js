class TheaterApp {
  constructor({
    slug,
    name,
    baseUrl,
    description,
    iconText,
    accentColor,
    requiresLogin,
  }) {
    this.slug = slug;
    this.name = name;
    this.baseUrl = baseUrl;
    this.description = description;
    this.iconText = iconText;
    this.accentColor = accentColor;
    this.requiresLogin = requiresLogin;
  }

  toLauncherCard({ launchUrl, compatibilityNote }) {
    return {
      slug: this.slug,
      name: this.name,
      description: this.description,
      iconText: this.iconText,
      accentColor: this.accentColor,
      requiresLogin: this.requiresLogin,
      launchUrl,
      compatibilityNote,
    };
  }
}

export { TheaterApp };
