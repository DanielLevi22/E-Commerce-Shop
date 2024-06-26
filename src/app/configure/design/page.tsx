import { db } from "@/db/prisma"
import { notFound } from "next/navigation"
import { DesignConfigurator } from "./DesignConfigurator"

interface PageProps {
  searchParams:{
    [key:string]: string | string[] | undefined
  }
}
export default async function Page({ searchParams }:PageProps) {
  const  { id } = searchParams

  if(!id || typeof id !== 'string') {
    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where: {
      id
    }
  })

  if(!configuration) {
    return notFound()
  }


  const { imageUrl, height, width } = configuration


  return (
    <DesignConfigurator configId={id} imageUrl={imageUrl} imageDimensions={{height, width}} />
  )
}
