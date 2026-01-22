import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const categories = [
  { name: 'Camisetas', slug: 'camisetas', description: 'Camisetas diversas', active: true },
  { name: 'Moletons', slug: 'moletons', description: 'Moletom e hoodies', active: true },
  { name: 'Acessórios', slug: 'acessorios', description: 'Acessórios e complementos', active: true },
]

const products = [
  {
    name: 'Classic Tee',
    slug: 'classic-tee',
    description: 'Camiseta clássica, confortável e versátil.',
    price: '29.99',
    colors: ['Black', 'White'],
    images: ['https://placehold.co/600x400?text=classic-tee+1', 'https://placehold.co/600x400?text=classic-tee+2'],
    sizes: ['S', 'M', 'L'],
    stock: 120,
    active: true,
    categorySlug: 'camisetas',
  },
  {
    name: 'Vintage Hoodie',
    slug: 'vintage-hoodie',
    description: 'Moletom estilo vintage com caimento oversized.',
    price: '59.90',
    colors: ['Gray', 'Navy'],
    images: ['https://placehold.co/600x400?text=vintage-hoodie+1'],
    sizes: ['M', 'L', 'XL'],
    stock: 60,
    active: true,
    categorySlug: 'moletons',
  },
  {
    name: 'Slim Jeans',
    slug: 'slim-jeans',
    description: 'Jeans slim fit, tecido stretch para maior conforto.',
    price: '79.50',
    colors: ['Blue'],
    images: ['https://placehold.co/600x400?text=slim-jeans+1'],
    sizes: ['30', '32', '34', '36'],
    stock: 40,
    active: true,
    categorySlug: 'camisetas',
  },
  {
    name: 'Sport Shorts',
    slug: 'sport-shorts',
    description: 'Shorts esportivo, ideal para treinos.',
    price: '24.00',
    colors: ['Black', 'Green'],
    images: ['https://placehold.co/600x400?text=sport-shorts+1'],
    sizes: ['S', 'M', 'L'],
    stock: 200,
    active: true,
    categorySlug: 'camisetas',
  },
  {
    name: 'Leather Belt',
    slug: 'leather-belt',
    description: 'Cinto de couro legítimo com fivela metálica.',
    price: '19.99',
    colors: ['Brown', 'Black'],
    images: ['https://placehold.co/600x400?text=leather-belt+1'],
    sizes: ['M', 'L'],
    stock: 80,
    active: true,
    categorySlug: 'acessorios',
  },
  {
    name: 'Summer Dress',
    slug: 'summer-dress',
    description: 'Vestido leve para dias quentes.',
    price: '49.00',
    colors: ['Yellow', 'White'],
    images: ['https://placehold.co/600x400?text=summer-dress+1'],
    sizes: ['S', 'M', 'L'],
    stock: 30,
    active: true,
    categorySlug: 'camisetas',
  },
  {
    name: 'Running Shoes',
    slug: 'running-shoes',
    description: 'Tênis de corrida com amortecimento avançado.',
    price: '119.99',
    colors: ['Black', 'Red'],
    images: ['https://placehold.co/600x400?text=running-shoes+1'],
    sizes: ['40', '41', '42', '43'],
    stock: 75,
    active: true,
    categorySlug: 'acessorios',
  },
  {
    name: 'Beanie Cap',
    slug: 'beanie-cap',
    description: 'Gorro em malha, estilo urbano.',
    price: '12.50',
    colors: ['Black', 'Gray'],
    images: ['https://placehold.co/600x400?text=beanie-cap+1'],
    sizes: [],
    stock: 150,
    active: true,
    categorySlug: 'acessorios',
  },
  {
    name: 'Canvas Backpack',
    slug: 'canvas-backpack',
    description: 'Mochila de lona com múltiplos compartimentos.',
    price: '69.00',
    colors: ['Olive', 'Black'],
    images: ['https://placehold.co/600x400?text=canvas-backpack+1'],
    sizes: [],
    stock: 45,
    active: true,
    categorySlug: 'acessorios',
  },
  {
    name: 'Striped Socks',
    slug: 'striped-socks',
    description: 'Meias listradas em algodão macio.',
    price: '6.99',
    colors: ['White', 'Blue'],
    images: ['https://placehold.co/600x400?text=striped-socks+1'],
    sizes: ['One Size'],
    stock: 300,
    active: true,
    categorySlug: 'acessorios',
  },
]

async function main() {
  try {
    // Cria categorias (skipDuplicates evita erro se já existirem)
    await prisma.category.createMany({ data: categories, skipDuplicates: true })

    // Recupera categorias para mapear slugs -> ids
    const savedCategories = await prisma.category.findMany()
    const categoryMap: Record<string, number> = {}
    for (const c of savedCategories) {
      categoryMap[c.slug] = c.id
    }

    // Prepara dados dos produtos com categoryId
    const productsWithCategory = products.map((p: any) => ({
      name: p.name,
      slug: p.slug,
      description: p.description,
      price: p.price,
      colors: p.colors,
      images: p.images,
      sizes: p.sizes,
      stock: p.stock,
      active: p.active,
      categoryId: categoryMap[p.categorySlug] || savedCategories[0]?.id,
    }))

    const res = await prisma.product.createMany({ data: productsWithCategory, skipDuplicates: true })
    console.log(`✅ Seed finalizado: ${res.count} produtos inseridos (skipDuplicates: true)`)
  } catch (error) {
    console.error('❌ Erro no seed:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
