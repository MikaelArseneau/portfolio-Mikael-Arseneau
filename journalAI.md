# Journail Ai

* const urlParams = new URLSearchParams(window.location.search); - permet la creation de la page projet
* const projId = parseInt(urlParams.get('proj-id')); - permet la creation de la page projet
* this.selectedProjet = this.projects.find(p => p.id === projId); - permet la creation de la page projet 
* v-html="selectedProjet.processus_creation.processus.texte" - permet d'utiliser des balise directement dans le json
* transition-group name="fade" tag="div" class="all-projet" - effet de transition sur la classe all-projet 
  

