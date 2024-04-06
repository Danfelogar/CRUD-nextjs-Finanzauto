import Link from "next/link";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { GoFileDirectory, GoGear } from "react-icons/go";
import { LuLibrary } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

import {
  HeaderTableGeneric,
  TableVideoDetailsGeneric,
  TableVideosGeneric,
} from "..";

export let optionsNavigate = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    pathForNavigate: "/",
    icons: <MdOutlineDashboard />,
  },
  {
    id: 2,
    title: "Videos",
    path: "/videos",
    pathForNavigate: "/",
    icons: <GoFileDirectory />,
  },
  {
    id: 3,
    title: "Player",
    path: "/player",
    pathForNavigate: "/",
    icons: <AiOutlinePlayCircle />,
  },
  {
    id: 4,
    title: "Analytics",
    path: "/analytics",
    pathForNavigate: "/",
    icons: <FaRegChartBar />,
  },
  {
    id: 5,
    title: "Configuraciones",
    path: "/config",
    pathForNavigate: "/",
    icons: <GoGear />,
  },
];

export let optionsBreadcrumb = [
  {
    id: 1,
    title: "Tabla de usuarios",
    path: "/",
    pathForNavigate: "/",
    icons: <LuLibrary />,
  },
  {
    id: 2,
    title: "Papelera",
    path: "/trash",
    pathForNavigate: "/trash",
    icons: <IoTrashOutline />,
  },
];

export let tableDataGenericVideos: TableVideosGeneric[] = [
  {
    id: 1,
    name: (
      <p className="flex gap-2 items-center">
        <GoFileDirectory color="#4a00ff" /> Afiliados
      </p>
    ),

    videos: 8,
    size: "7.3 GB",
    lastModified: "30/may/2023",
    selected: false,
  },
  {
    id: 2,
    name: (
      <Link href={`/videos/Danfelogar`}>
        <p className="flex gap-2 items-center">
          <GoFileDirectory color="#4a00ff" /> Danfelogar
        </p>
      </Link>
    ),
    videos: 21,
    size: "1.4 GB",
    lastModified: "22/jun/2022",
    selected: false,
  },
  {
    id: 3,
    name: (
      <p className="flex gap-2 items-center">
        <GoFileDirectory color="#4a00ff" /> Comizzión
      </p>
    ),
    videos: 15,
    size: "284 MB",
    lastModified: "11/sep/2021",
    selected: false,
  },
  {
    id: 4,
    name: (
      <p className="flex gap-2 items-center">
        <GoFileDirectory color="#4a00ff" /> Creador de Contenido
      </p>
    ),
    videos: 2,
    size: "4.3 GB",
    lastModified: "21/jun/2023",
    selected: false,
  },
  {
    id: 5,
    name: (
      <p className="flex gap-2 items-center">
        <GoFileDirectory color="#4a00ff" /> Exportados Wil
      </p>
    ),
    videos: 14,
    size: "500 MB",
    lastModified: "5/abr/2023",
    selected: false,
  },
  {
    id: 6,
    name: (
      <p className="flex gap-2 items-center">
        <GoFileDirectory color="#4a00ff" /> Afiliados Pro
      </p>
    ),
    videos: 6,
    size: "7.3 GB",
    lastModified: "30/may/2023",
    selected: false,
  },
  {
    id: 7,
    name: (
      <p className="flex gap-2 items-center">
        <GoFileDirectory color="#4a00ff" /> Danfelogar Pro
      </p>
    ),
    videos: 30,
    size: "1.4 GB",
    lastModified: "22/jun/2022",
    selected: false,
  },
  {
    id: 8,
    name: (
      <p className="flex gap-2 items-center">
        <GoFileDirectory color="#4a00ff" /> Comizzión Pro
      </p>
    ),
    videos: 2,
    size: "284 MB",
    lastModified: "11/sep/2021",
    selected: false,
  },
  {
    id: 9,
    name: (
      <p className="flex gap-2 items-center">
        <GoFileDirectory color="#4a00ff" /> Creador de Contenido Pro
      </p>
    ),
    videos: 8,
    size: "4.3 GB",
    lastModified: "21/jun/2023",
    selected: false,
  },
  {
    id: 10,
    name: (
      <p className="flex gap-2 items-center">
        <GoFileDirectory color="#4a00ff" /> Exportados Wil Pro
      </p>
    ),

    videos: 14,
    size: "500 MB",
    lastModified: "5/arb/2023",
    selected: false,
  },
];

export let tableDataGenericVideoData: TableVideoDetailsGeneric[] = [
  {
    id: 1,
    name: (
      <p className="flex gap-2 items-center">
        <AiOutlinePlayCircle color="#4a00ff" /> Entrenamiento.mp4
      </p>
    ),
    size: "7.3 GB",
    time: "04:11:37",
    lastModified: "30/may/2023",
    selected: false,
  },
  {
    id: 2,
    name: (
      <Link href={`/videos/Danfelogar`}>
        <p className="flex gap-2 items-center">
          <AiOutlinePlayCircle color="#4a00ff" /> Salida-al-mercado-versión
          nueva.mp4
        </p>
      </Link>
    ),
    size: "1.4 GB",
    time: "47:55",
    lastModified: "22/jun/2022",
    selected: false,
  },
  {
    id: 3,
    name: (
      <p className="flex gap-2 items-center">
        <AiOutlinePlayCircle color="#4a00ff" /> Como-cerrar-una-venta.mp4
      </p>
    ),
    size: "284 MB",
    time: "10:12",
    lastModified: "11/sep/2021",
    selected: false,
  },
  {
    id: 4,
    name: (
      <p className="flex gap-2 items-center">
        <AiOutlinePlayCircle color="#4a00ff" /> Crea-un-ticket-valioso.mp4
      </p>
    ),
    size: "4.3 GB",
    time: "03:22:37",
    lastModified: "21/jun/2023",
    selected: false,
  },
  {
    id: 5,
    name: (
      <p className="flex gap-2 items-center">
        <AiOutlinePlayCircle color="#4a00ff" /> Conquista-el-mercado-digital.mp4
      </p>
    ),
    size: "500 MB",
    time: "13:45",
    lastModified: "5/abr/2023",
    selected: false,
  },
  {
    id: 6,
    name: (
      <p className="flex gap-2 items-center">
        <AiOutlinePlayCircle color="#4a00ff" /> EntrenamientoPro.mp4
      </p>
    ),

    size: "7.3 GB",
    time: "03:22:37",
    lastModified: "30/may/2023",
    selected: false,
  },
  {
    id: 7,
    name: (
      <p className="flex gap-2 items-center">
        <AiOutlinePlayCircle color="#4a00ff" /> Salida-al-mercado-versión
        Pro.mp4
      </p>
    ),
    size: "1.4 GB",
    time: "47:55",
    lastModified: "22/jun/2022",
    selected: false,
  },
  {
    id: 8,
    name: (
      <p className="flex gap-2 items-center">
        <AiOutlinePlayCircle color="#4a00ff" /> Como-cerrar-una-venta-Pro.mp4
      </p>
    ),
    size: "284 MB",
    time: "10:12",
    lastModified: "11/sep/2021",
    selected: false,
  },
  {
    id: 9,
    name: (
      <p className="flex gap-2 items-center">
        <AiOutlinePlayCircle color="#4a00ff" /> Crea-un-ticket-valioso-Pro.mp4
      </p>
    ),
    size: "4.3 GB",
    time: "03:22:37",
    lastModified: "21/jun/2023",
    selected: false,
  },
  {
    id: 10,
    name: (
      <p className="flex gap-2 items-center">
        <AiOutlinePlayCircle color="#4a00ff" /> Conquista-el-mercado-digital.mp4
      </p>
    ),
    size: "500 MB",
    time: "13:45",
    lastModified: "5/arb/2023",
    selected: false,
  },
];

export let headerVideosFiles: HeaderTableGeneric[] = [
  {
    id: 1,
    title: "Nombre",
    className: "!text-left !w-[50%]",
  },
  {
    id: 2,
    title: "Videos",
    className: "!text-left ",
  },
  {
    id: 3,
    title: "Tamaño",
    className: "!text-left ",
  },
  {
    id: 4,
    title: "Última modificación",
    className: "!text-left ",
  },
];

export let headerVideoDetails: HeaderTableGeneric[] = [
  {
    id: 1,
    title: "Nombre",
    className: "!text-left !w-[50%]",
  },
  {
    id: 2,
    title: "Tamaño",
    className: "!text-left ",
  },
  {
    id: 3,
    title: "Duración",
    className: "!text-left ",
  },
  {
    id: 4,
    title: "Última modificación",
    className: "!text-left ",
  },
];

export let headerUserData: HeaderTableGeneric[] = [
  {
    id: 0,
    title: "id",
    className: "!text-left",
  },
  {
    id: 1,
    title: "Nombres y apellidos",
    className: "!text-left",
  },
  {
    id: 3,
    title: "Imagen",
    className: "!text-left ",
  },
];

export function getFormattedDate(): string {
  const date = new Date();

  const options = {
    day: "numeric",
    month: "short",
    year: "2-digit",
  };
  //@ts-ignore
  const formattedDate = date.toLocaleDateString("es-ES", options);
  return formattedDate.replace(/\s/g, "-").toLowerCase();
}

export function checkPath(pathname: string, optionPath: string): boolean {
  if (optionPath !== "/") {
    return pathname.includes(optionPath);
  } else {
    return pathname === "/";
  }
}
