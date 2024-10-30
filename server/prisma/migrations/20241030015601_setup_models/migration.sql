-- CreateTable
CREATE TABLE `Aluno` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `nota1` INTEGER NOT NULL,
    `nota2` INTEGER NOT NULL,
    `nota3` INTEGER NOT NULL,
    `nota4` INTEGER NOT NULL,
    `nota5` INTEGER NOT NULL,
    `frequencia` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
