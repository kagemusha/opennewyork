function activityTemplate(params) {
  return `
    <div class='activity'>
      <h3>${params.title}</h3>
      <div class='activity-content'>
        ${params.content}
      </div>
      <a class="cta" href='${params.url}.html'>${params.cta}</a>
    </div>
  `
}

