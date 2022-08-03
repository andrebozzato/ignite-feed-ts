import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

import ImgBackUser from '../images/img-back-user.svg'
import ImgAvatar from '../images/img-avatar.png'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={ImgBackUser}
        alt="image-background-user"
      />

      <div className={styles.profile}>
        <Avatar src={ImgAvatar} />

        <strong>Leslie Alexander</strong>
        <span>UI Designer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
