const nums   = [1,2,3,4,3]
const target = 6

function countPairs(nums, target) {
  let count = 0
  let steps = 0

  for (let i = 0; i < nums.length; i++) {
    steps++ // passo do loop externo

    for (let j = i + 1; j < nums.length; j++) {
      steps++ // passo do loop interno

      steps++ // comparação
      if (nums[i] + nums[j] === target) {
        console.log(`Par encontrado: (${nums[i]}, ${nums[j]})`)
        count++
      }
    }
  }

  console.log("Total de passos:", steps)
  return count
}

console.log("Total de pares:", countPairs(nums, target))