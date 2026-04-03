# Theme Section Schema Example

Use this pattern to explain a valid OS 2.0 section structure.

```liquid
<section class="promo-banner">
  {% if section.settings.heading != blank %}
    <h2>{{ section.settings.heading }}</h2>
  {% endif %}

  {% for block in section.blocks %}
    {% case block.type %}
      {% when 'text' %}
        <div {{ block.shopify_attributes }}>{{ block.settings.text }}</div>
    {% endcase %}
  {% endfor %}
</section>

{% schema %}
{
  "name": "Promo banner",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading"
    }
  ],
  "blocks": [
    {
      "type": "text",
      "name": "Text",
      "settings": [
        {
          "type": "text",
          "id": "text",
          "label": "Text"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Promo banner"
    }
  ]
}
{% endschema %}
```

Checklist:

- keep schema valid JSON
- use settings and blocks for merchant-configurable content
- prefer section-based customization over hardcoded template duplication
