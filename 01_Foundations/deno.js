const food = Deno.args[0]

if (food === 'love') {
  console.log('🦕...Deno is born!')
} else {
  console.log('🥚... this egg needs some love')
}

setTimeout(() => {
  console.log('check')
  console.table(Deno.metrics())
}, 1000)
