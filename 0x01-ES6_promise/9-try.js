export default function guardrail(mathFunction) {
  const queue = [];
  let value;

  try {
    value = mathFunction();
    queue.push(value);
  } catch (err) {
    queue.push(err.message);
  }

  queue.push('Guardrail was processed');

  return queue;
}
