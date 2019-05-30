class AddPasswordDigestToTherapists < ActiveRecord::Migration[5.2]
  def change
    add_column :therapists, :password_digest, :string
  end
end
