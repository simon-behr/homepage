<script setup lang="ts">
definePageMeta({ layout: 'no-background' })
</script>

<template>
  <div class="impressum">
    <div class="content">
      <h1 class="title">Impressum</h1>

      <section>
        <h2>Betreiber dieser Website und Verantwortlicher im Sinne des Telemediengesetzes:</h2>
        <p>
          Simon Behr<br />
          85132 Schernfeld<br />
          Deutschland
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>E-Mail: <a href="mailto:behrsimon08@gmail.com">behrsimon08@gmail.com</a></p>
      </section>

      <section>
        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.impressum {
  padding: 80px var(--spacing-side);
  min-height: calc(100dvh - var(--spacing-header));
}

.content {
  max-width: 640px;
}

.title {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 56px;
  color: var(--color-text);
}

section {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--color-border);
}

section:last-child {
  border-bottom: none;
}

h2 {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-text-muted);
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  text-transform: uppercase;
  font-family: 'Syne Mono', monospace;
}

p {
  font-size: 15px;
  color: var(--color-text);
  line-height: 1.75;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: opacity 0.2s;
}

a:hover {
  opacity: 0.75;
}
</style>
