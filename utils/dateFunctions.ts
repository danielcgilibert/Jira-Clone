import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'

export const dateFuncions = (unix_time: number) => {
  const fromNow = formatDistanceToNow(unix_time, { locale: es })

  return `Hace ${fromNow}`
}
