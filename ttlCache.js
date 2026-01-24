function getActiveCacheCount(cacheEntries, queryTimes) {
    const START = 1;
    const END = -1;
  
    // 1. Criamos marcos temporais claros
    const timelineEvents = [];
    for (const [startTime, duration] of cacheEntries) {
      timelineEvents.push({ time: startTime, effect: START });
      timelineEvents.push({ time: startTime + duration + 1, effect: END });
    }
  
    // 2. Ordenamos os eventos cronologicamente
    timelineEvents.sort((a, b) => a.time - b.time || a.effect - b.effect);
  
    // 3. Função para contar itens ativos em um dado momento
    const countAt = (time) => {
      return timelineEvents
        .filter(event => event.time <= time)
        .reduce((total, event) => total + event.effect, 0);
    };
  
    return queryTimes.map(countAt);
  }