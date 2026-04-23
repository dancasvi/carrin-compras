-- CreateTable
CREATE TABLE "markets" (
    "id" SERIAL NOT NULL,
    "document" VARCHAR(20) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "address" TEXT,
    "number" VARCHAR(10),
    "neighborhood" VARCHAR(50),
    "city" VARCHAR(50),
    "state" VARCHAR(2),
    "country" VARCHAR(50) DEFAULT 'Brasil',
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_by" INTEGER,

    CONSTRAINT "markets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_brand" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "category_id" INTEGER,
    "logo_url" TEXT,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_by" INTEGER,

    CONSTRAINT "product_brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_by" INTEGER,

    CONSTRAINT "product_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "brand_id" INTEGER,
    "unit" VARCHAR(10),
    "amount" DECIMAL(10,2),
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_by" INTEGER,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_list_item" (
    "id" SERIAL NOT NULL,
    "shop_list_id" INTEGER,
    "product_id" INTEGER,
    "amount" DECIMAL(10,2) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "shop_list_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shop_lists" (
    "id" SERIAL NOT NULL,
    "expected_date" DATE,
    "performed_date" DATE,
    "market_id" INTEGER,
    "user_id" INTEGER,

    CONSTRAINT "shop_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email_address" VARCHAR(100) NOT NULL,
    "phone_number" VARCHAR(20),
    "avatar_url" TEXT,
    "birth_date" DATE,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_by" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "markets_document_key" ON "markets"("document");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_address_key" ON "users"("email_address");

-- AddForeignKey
ALTER TABLE "product_brand" ADD CONSTRAINT "product_brand_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "product_brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shop_list_item" ADD CONSTRAINT "shop_list_item_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shop_list_item" ADD CONSTRAINT "shop_list_item_shop_list_id_fkey" FOREIGN KEY ("shop_list_id") REFERENCES "shop_lists"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shop_lists" ADD CONSTRAINT "shop_lists_market_id_fkey" FOREIGN KEY ("market_id") REFERENCES "markets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "shop_lists" ADD CONSTRAINT "shop_lists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
